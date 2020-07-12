from django.db import models

# Create your models here.
class userlogin(models.Model):
    username = models.CharField(primary_key=True, max_length=50)
    address = models.CharField(max_length=50, null = False, unique = True)