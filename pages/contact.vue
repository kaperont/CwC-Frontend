<template>
    <div class="card flex justify-center mt-5">
        <!-- <PMessage v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error?.message }}</PMessage> -->
        <Toast />
        <Form v-slot="$form" :initialValues :resolver @submit="onFormSubmit" class="grid grid-cols-2 gap-5">
        <FloatLabel variant="on">
            <InputText name="first_name" id="first_name" type="text" />
            <label for="first_name">First Name</label>
        </FloatLabel>
            
        <FloatLabel variant="on">
            <InputText name="last_name" id="last_name" type="text" />
            <label for="last_name">Last Name</label>
        </FloatLabel>

        <FloatLabel variant="on" class="col-span-2">
            <InputText name="email" id="email" type="text" class="w-full" />
            <label for="email">Email</label>
        </FloatLabel>
            
        <FloatLabel variant="on"class="col-span-2">
            <InputMask id="phone" name="phone" mask="(999)-999-9999" class="w-full" />
            <label for="phone">Phone Number</label>
        </FloatLabel>
        <Button type="submit" severity="secondary" label="Contact Us" class="col-span-2" />
        </Form>
    </div>
</template>

<script setup>
import { useToast } from 'primevue/usetoast';

const toast = useToast();

const initialValues = reactive({
  first_name: '',
  last_name: '',
  email: '',
  phone: '',
});

const resolver = ({ values }) => {
  const errors = {};

  if (!values.first_name) {
      errors.first_name = [{ message: 'First name is required.' }];
  }

  return {
      errors
  };
};

const onFormSubmit = ({ valid }) => {
  if (valid) {
      toast.add({
          severity: 'success',
          summary: 'Form is submitted.',
          life: 3000
      });
  }
};
</script>
