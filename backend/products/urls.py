from django.urls import path, include
from django.urls.resolvers import URLPattern
from products import views

urlpatterns = [
    path('products', views.get_all_products, name="all_products")
]