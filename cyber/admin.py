from django.contrib import admin
from .models import cyber

# Register your models here.


class cyberAdmin(admin.ModelAdmin):
    list_display = ('id', 'title', 'description', 'date', 'done')
    list_display_links = ('id', 'title')
    search_fields = ('id', ' title', 'description')
    list_editable = ('done',)
    list_filter = ('done',)


admin.site.register(cyber, cyberAdmin)

