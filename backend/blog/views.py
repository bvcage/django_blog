from django.contrib.auth import login, logout
from rest_framework import permissions, status
from rest_framework.authentication import SessionAuthentication
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.views import APIView

from blog.models import BlogPost, UserProfile
from blog.serializers import BlogPostSerializer, UserSerializer, UserProfileSerializer, UserRegisterSerializer, UserLoginSerializer
from blog.validations import custom_validation, validate_email, validate_password

class BlogPostListView(ListAPIView):
    queryset = BlogPost.objects.order_by('-created_TS')
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class BlogPostDetailView(RetrieveAPIView):
    queryset = BlogPost.objects.order_by('-created_TS')
    serializer_class = BlogPostSerializer
    lookup_field = 'slug'
    permission_classes = (permissions.AllowAny, )

class UserView (APIView):
    permission_classes = (permissions.IsAuthenticated, )
    authentication_classes = (SessionAuthentication, )

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response({'user': serializer.data}, status=status.HTTP_200_OK)
    
    def patch(self, request):
        serializer = UserSerializer(request.user, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)

class UserProfileView (APIView):
    permission_classes = (permissions.IsAuthenticated, )
    authentication_classes = (SessionAuthentication, )

    def get(self, request):
        profile = UserProfile.objects.get(user=request.user)
        serializer = UserProfileSerializer(profile)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def patch(self, request):
        profile = UserProfile.objects.get(user=request.user)
        serializer = UserProfileSerializer(profile, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    
class UserRegisterView(APIView):
    permission_classes = (permissions.AllowAny, )
    serializer_class = UserRegisterSerializer
    
    def post(self, request):
        try:
            clean_data = custom_validation(request.data)
            serializer = UserRegisterSerializer(data=clean_data)
            if serializer.is_valid(raise_exception=True):
                user = serializer.create(clean_data)
                if user:
                    return Response(serializer.data, status=status.HTTP_201_CREATED)
            return Response(status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({'errors': e}, status=status.HTTP_400_BAD_REQUEST)

class UserLoginView (APIView):
    permission_classes = (permissions.AllowAny, )
    authentication_classes = (SessionAuthentication, )

    def post(self, request):
        data = request.data
        assert validate_email(data)
        assert validate_password(data)
        serializer = UserLoginSerializer(data=data)
        if serializer.is_valid(raise_exception=True):
            user = serializer.check_user(data)
            login(request, user)
            res_obj = UserSerializer(user).data
            return Response(res_obj, status=status.HTTP_200_OK)


class UserLogoutView (APIView):

    def get(self, request):
        logout(request)
        return Response(status=status.HTTP_200_OK)
