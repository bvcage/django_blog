from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path('api/', include('rest_framework.urls')),
]