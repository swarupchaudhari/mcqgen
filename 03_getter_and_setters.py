class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    @property
    def first_name(self):
        return self.name.split(" ")[0]

    @first_name.setter
    def first_name(self, first):
        last = self.name.split(" ")[1]
        self.name = f"{first} {last}"


e = Employee("Jack Doe", 34555)
#print(e.first_name())
#e.set_first_name("John")
#print(e.name)

print(e.first_name)      # Getter
e.first_name = "John"    # Setter
print(e.name)