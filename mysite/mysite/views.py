from inertia import render

def index(request):
    lista = []
    lista.append(12)
    return render(request, 'Index', props={
    'array': lista
})