class Animal:
    def _init_(self, name):
        self.name = name
    
    def talk(self):
        raise NotImplementedError("Derived class must implement this function")

class Cat(Animal):
    def talk(self):
        return "meow"

class Dog(Animal):
    def talk(self):
        return "woof"

animals = [Cat("Rekha"), Cat("Soniya"), Dog("Moti"), Cat("Rupa"), Dog("Gabbar")]
for animal in animals:
    print(animal.name, "-", animal.talk())