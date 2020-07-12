from django.shortcuts import render

# Create your views here.
def loginbl(request):
    return render(request,'dbapp/login.html')

def registerbl(request):
    return render(request,'dbapp/register.html')