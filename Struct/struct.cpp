struct Person {
  char strName[40];
  int nID;
  int nAge;
};

void main() {
  Person person1, *nPerson2 = new Person();

  person1.nID = 123456;
  person1.nAge = 32;
  strcpy(person1, "Nguyen Van A");
};