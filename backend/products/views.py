from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from products.serializers import ProductSerializer
from products.models import Product
# Create your views here.

# @api_view()
# def hello(request):
#     return Response({"message": "Hello, world!"})

@api_view(['GET',])
def get_all_products(self):
    all_products = Product.objects.all()
    data = ProductSerializer(all_products, many=True).data
    return Response(data)
