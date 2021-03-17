from django.urls import path, include
from django.urls.resolvers import URLPattern
from products import views

urlpatterns = [
    path('', views.get_all_products, name="all_products"),
    path('<str:pk>', views.get_product, name="get_product"),

]