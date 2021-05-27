export const recruitPostFormInitialValues = (isCreateForm, prevPost) => ({
  mountainName: isCreateForm ? '' : prevPost.mountainName,
  recruitingNumber: isCreateForm ? 1 : prevPost.recruitingNumber,
  hikingLevel: isCreateForm ? '' : prevPost.hikingLevel,
  recruitingGender: isCreateForm ? '' : prevPost.recruitingGender,
  recruitingAge: isCreateForm ? [20, 45] : prevPost.recruitingAge,
  description: isCreateForm ? '' : prevPost.description,
  recruitDate: isCreateForm ? new Date() : prevPost.recruitDate,
  title: isCreateForm ? '' : prevPost.title,
  imageURL: isCreateForm ? {} : prevPost.imageURL,
});

export const regularPostFormInitialValues = (isCreateForm, prevPost) => ({
  title: isCreateForm ? '' : prevPost.title,
  mountainName: isCreateForm ? '' : prevPost.mountainName,
  imageURL: isCreateForm ? '' : prevPost.imageURL,
  content: isCreateForm ? '' : prevPost.content,
});
