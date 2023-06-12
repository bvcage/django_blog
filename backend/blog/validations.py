from django.contrib.auth.models import User
from django.core.exceptions import ValidationError

def custom_validation(data):
    email = data['email'].strip()
    username = data['username'].strip()
    password = data['password'].strip()

    
    
    if not email:
        raise ValidationError('Email is required.')
    
    if not password:
        raise ValidationError('Password is required.')
    
    if not username:
        raise ValidationError('Username is required.')
    
    if User.objects.filter(email=email).exists():
        raise ValidationError('Account already exists with this email.')
    
    if User.objects.filter(username=username).exists():
        raise ValidationError('Account already exists with this username.')
    
    return data


def validate_email(data):
    email = data['email'].strip()
    if not email:
        raise ValidationError('an email is needed')
    return True

def validate_username(data):
    username = data['username'].strip()
    if not username:
        raise ValidationError('choose another username')
    return True

def validate_password(data):
    password = data['password'].strip()
    if not password:
        raise ValidationError('a password is needed')
    return True