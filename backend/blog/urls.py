from django.contrib import admin
from django.urls import include, path

from .views import BlogPostListView, BlogPostDetailView, UserView, UserLoginView, UserLogoutView, UserProfileView, UserRegisterView

urlpatterns = [
    path('register', UserRegisterView.as_view(), name='register'),
    path('login', UserLoginView.as_view(), name='login'),
    path('logout', UserLogoutView.as_view(), name='logout'),
    path('user', UserView.as_view(), name='user'),
    path('user-profile', UserProfileView.as_view(), name='user-profile'),
    path('<slug>', BlogPostDetailView.as_view()),
    path('', BlogPostListView.as_view()),
]