from django.shortcuts import render
from django.core.exceptions import ObjectDoesNotExist
from rest_framework.decorators import api_view
from rest_framework.response import Response
from products.serializers import ProductImageSerializer, ProductSerializer
from products.models import Product

import time
# Create your views here.

# @api_view()
# def hello(request):
#     return Response({"message": "Hello, world!"})

@api_view(['GET',])
def get_all_products(self):

    all_products = Product.objects.all()
    data = ProductSerializer(all_products, many=True).data
    time.sleep(4)
    return Response(data)

@api_view(['GET'])
def get_product(self, pk):
    try:
        product = Product.objects.get(id = pk)
        images = product.product_images.all()
    except ObjectDoesNotExist:
        data = {
            "message": f"product with id {pk} does not exis"
        }
        return Response(data)

    data = ProductSerializer(product, many=False).data
    images = ProductImageSerializer(images,many=True).data
    data["more_images"] = images
    return Response(data)