from django.contrib import admin
from django.urls import include, path

from .views import BlogPostListView, BlogPostDetailView

urlpatterns = [
    # path('api/', include('rest_framework.urls')),
    path('', BlogPostListView.as_view()),
    path('<slug>', BlogPostDetailView.as_view())
]