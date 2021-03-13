from django.db import models
from django.contrib.auth import get_user_model

# Create your models here.
class Product(models.Model):
    name = models.CharField(max_length=256, blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    thumbnail = models.ImageField(blank=True, null=True)
    price = models.DecimalField(decimal_places=2, max_digits=10)

    created_on = models.DateTimeField(auto_now_add=True)
    updated_on = models.DateTimeField(auto_now=True)

    stock_count = models.IntegerField(default=1)

    category = models.ForeignKey('Category', on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(get_user_model(), on_delete=models.SET_NULL, null=True)

    def __str__(self):
        return f"{self.name}__{self.category}"
    

class Category(models.Model):
    class Meta:
        verbose_name_plural = "categories"

    type = models.CharField(max_length=32)

    def __str__(self):
        return f"{self.type}"