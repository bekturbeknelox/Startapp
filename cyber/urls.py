from rest_framework import routers
from .api import cyberViewSet


router = routers.DefaultRouter()
router.register('api/cyber', cyberViewSet, 'cyber')


urlpatterns = router.urls
