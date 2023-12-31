from django.shortcuts import render
from rest_framework import status, generics
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse
from app.serializer import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.decorators import api_view, permission_classes
import json
from .models import Flashcard
from .serializer import FlashcardSerializer
from django.shortcuts import get_object_or_404

# Create your views here.


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/app/token/',
        '/app/register/',
        '/app/token/refresh/',
        '/app/test/'
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        try:
            body = request.body.decode('utf-8')
            data = json.loads(body)
            if 'text' not in data:
                return Response("Invalid JSON data", status.HTTP_400_BAD_REQUEST)
            text = data.get('text')
            data = f'Congratulation your API just responded to POST request with text: {text}'
            return Response({'response': data}, status=status.HTTP_200_OK)
        except json.JSONDecodeError:
            return Response("Invalid JSON data", status.HTTP_400_BAD_REQUEST)
    return Response("Invalid JSON data", status.HTTP_400_BAD_REQUEST)

def flashcard_detail(request, flashcard_id):
    flashcard = get_object_or_404(Flashcard, id=flashcard_id)
    flashcard_data = {
        'id': flashcard.id,
        'question': flashcard.question,
        'answer': flashcard.answer,
    }
    return JsonResponse(flashcard_data)

class FlashcardListCreateView(generics.ListCreateAPIView):
    queryset = Flashcard.objects.all()
    serializer_class = FlashcardSerializer