from django.contrib.auth.models import User
from django.db import models
from django.template.defaultfilters import slugify
from datetime import datetime

class BlogPost(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField()
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    content = models.TextField()
    comments_enabled = models.BooleanField()
    created_TS = models.DateTimeField(default=datetime.now)
    featured = models.BooleanField()
    preview = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=255)
    summary = models.CharField(max_length=255)
    updated_TS = models.DateTimeField(default=datetime.now, blank=True)

    def save(self, *args, **kwargs):
        original_slug = slugify(self.title)
        queryset = BlogPost.objects.all().filter(slug__iexact=original_slug).count()

        count = 1
        slug = original_slug
        while(queryset):
            slug = original_slug + '-' + str(count)
            count += 1
            queryset = BlogPost.objects.all().filter(slug__iexact=slug).count()

        self.slug = slug

        super(BlogPost, self).save(*args, **kwargs)

    def __str__(self):
        return self.title

class BlogPostCategory(models.Model):
    name = models.CharField(max_length=255)

class BlogPostTag(models.Model):
    name = models.CharField(max_length=255)

class BlogPostLike(models.Model):
    blog_post_id = models.ForeignKey(BlogPost, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

class BlogPostFavorite(models.Model):
    blog_post_id = models.ForeignKey(BlogPost, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

class Comment(models.Model):
    blog_post_id = models.ForeignKey(BlogPost, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    content = models.TextField()

class CommentLike(models.Model):
    comment_id = models.ForeignKey(Comment, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)

class Inquiry(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone_number = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    reason_for_contact = models.CharField(max_length=255)
    message_subject = models.CharField(max_length=255)
    message = models.TextField()
    opened = models.BooleanField()

class SocialMediaPlatform(models.Model):
    name = models.CharField(max_length=255)
    icon = models.CharField(max_length=255)
    description = models.TextField()

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    bio = models.TextField()
    image = models.CharField(max_length=255)
    location = models.CharField(max_length=255)

class UserSocialMedia(models.Model):
    platform_id = models.ForeignKey(SocialMediaPlatform, on_delete=models.CASCADE)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    url = models.TextField()