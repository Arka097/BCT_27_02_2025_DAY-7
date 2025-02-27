my_tuple = (1, 2, 3, 4)
print("Original tuple:", my_tuple)

temp_list = list(my_tuple)

new_value = input("Enter a new value to add: ")

temp_list.append(int(new_value))

my_tuple = tuple(temp_list)

print("Updated tuple:", my_tuple)