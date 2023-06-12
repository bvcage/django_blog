from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError
from rest_framework import serializers
from .models import BlogPost, UserProfile

class UserProfileSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = UserProfile
        fields = '__all__'

class AuthorSerializer(serializers.ModelSerializer):
    profile = UserProfileSerializer(read_only=True)

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'profile', ]

class BlogPostSerializer(serializers.ModelSerializer):
    author = AuthorSerializer(read_only=True)

    class Meta:
        model = BlogPost
        fields = '__all__'
        lookup_field = 'slug'

class UserRegisterSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = User
        fields = '__all__'
    
    def create(self, clean_data):
        new_user = User.objects.create_user(email=clean_data['email'], password=clean_data['password'], username=clean_data['username'])
        return new_user


class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    class Meta:
        model = User
        fields = ('email', 'password', )

    def check_user(self, clean_data):
        print(clean_data)
        if 'username' not in clean_data:
            clean_data['username'] = User.objects.get(email__iexact=clean_data['email']).username
        user = authenticate(username=clean_data['username'], password=clean_data['password'])
        if not user:
            raise ValidationError('user not found')
        return user

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'email', 'is_staff', ]
