$(CC) = gcc

final: main.o hello.o add.o
	$(CC) main.o hello.o add.o -o final

main.o: main.c header.h
	$(CC) -c main.c

hello.o: hello.c header.h
	$(CC) -c hello.c

add.o: add.c header.h
	$(CC) -c add.c

clean:
	rm *.o final



