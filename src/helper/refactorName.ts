export const refactorName = (text: string) => {

  const arrayNameAndLastName: string[] = text.split(' ');
  const firstName: string = arrayNameAndLastName[0] + ' ';
  const initialsLastName: string = arrayNameAndLastName.splice(1).map(lastName => lastName.charAt(0) + '.').join(' ');

  return firstName + initialsLastName;
};
