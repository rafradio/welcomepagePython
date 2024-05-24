from django.shortcuts import render, redirect
from django.views.generic import TemplateView
from django.views.decorators.csrf import csrf_protect

class FirstPageView(TemplateView):
    template_name = "main/index.html"
    
    def get(self, request, *args, **kwargs):
        context = {}
        return render(request, self.template_name, context)
    
    def post(self, request, *args, **kwargs):
        context = {}
        print(request.POST['fileName'])
        return render(request, self.template_name, context)