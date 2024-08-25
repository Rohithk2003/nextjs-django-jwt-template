from django.db import models


# Create your models here.
class Blog(models.Model):
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to="blog_images/")
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title


class Career(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    duration = models.CharField(max_length=100)
    salary = models.CharField(max_length=100)
    location = models.CharField(max_length=100)
    type = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    required = models.TextField()
    education = models.TextField()

    def __str__(self):
        return self.title
