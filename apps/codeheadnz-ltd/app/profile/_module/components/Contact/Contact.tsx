'use client';

import { PageSection } from '@common/components/PageSection';
import { PROFILE_PAGE_SECTION_IDS } from '@common/config';
import { Button, Input } from "@heroui/react";
import React from 'react';

export const Contact = () => {
  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.entries(formData);
    console.log(payload);
  };
  const formFields = [
    {
      type: 'text',
      label: 'First Name',
      placeholder: 'Enter your first name',
      id: 'firstname',
    },
    {
      type: 'text',
      label: 'Last Name',
      placeholder: 'Enter your last name',
      id: 'lastname',
    },
    {
      type: 'email',
      label: 'Email Address',
      placeholder: 'Enter your email address',
      id: 'email',
    },
    {
      type: 'tel',
      label: 'Phone Number',
      placeholder: 'Enter your phone number',
      id: 'phone',
    },
  ];

  return (
    <PageSection
      id={PROFILE_PAGE_SECTION_IDS.contact}
      className="relative bg-cover bg-center"
      style={{
        backgroundImage: `url('/static/images/contact-bg-image.png')`,
      }}
    >
      <div className="flex flex-col justify-center items-center ">
        <p className="text-4xl font-bold my-8 sm:my-10 underline">Contact</p>
      </div>
      <div className="px-8 sm:px-16 lg:px-32 2xl:px-64 py-8">
        <form
          noValidate
          onSubmit={handleOnSubmit}
          className="flex flex-col gap-y-4 w-full max-w-md mx-auto"
        >
          {formFields.map((field, index) => (
            <Input
              key={`${field.id}-${index}`}
              labelPlacement="outside"
              variant="faded"
              radius="sm"
              size="md"
              fullWidth={false}
              isRequired={true}
              {...field}
            />
          ))}

          <Button
            color="primary"
            variant="solid"
            type="submit"
            className="w-auto gap-x-2"
          >
            Submit
          </Button>
        </form>
      </div>
    </PageSection>
  );
};
