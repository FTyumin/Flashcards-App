from django.urls import path
from . import views
from .views import FlashcardListCreateView

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('test/', views.testEndPoint, name='test'),
    path('', views.getRoutes),
    path('flashcards/', FlashcardListCreateView.as_view(), name='flashcard-list-create'),
    path('flashcards/<int:flashcard_id>/', views.flashcard_detail, name='flashcard_detail'),
]