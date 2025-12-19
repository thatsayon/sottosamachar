from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status, permissions

class LoginView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        return Response({
            "msg": "working"
        }, status=status.HTTP_200_OK)
