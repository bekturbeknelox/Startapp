from .models import cyber
from rest_framework import viewsets, permissions
from .serializers import cyberSerializer


class cyberViewSet(viewsets.ModelViewSet):
    queryset = cyber.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = cyberSerializer