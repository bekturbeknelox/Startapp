from rest_framework import serializers
from .models import cyber


class cyberSerializer(serializers.ModelSerializer):
    class Meta:
        model = cyber
        fields = '__all__'
