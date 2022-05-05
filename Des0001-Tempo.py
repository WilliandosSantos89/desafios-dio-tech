print('>> Tempo <<')

segundos = int(input('Digite um valor: '))

horas = int(segundos / 3600)
minutos = int(segundos - (horas * 3600) / 60)
segundos = int(segundos - (minutos * 60)- (horas * 3600))

print(f"{horas:02}:{minutos:02}:{segundos:02}")