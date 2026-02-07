'use client';

import { PageSection } from '@common/components/PageSection';
import { PROFILE_PAGE_SECTION_IDS } from '@common/config';
import { Button, Card, CardBody, Input, Link } from '@heroui/react';
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
      <div className="px-8 sm:px-16 lg:px-32 2xl:px-64 py-8 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <Card className="rounded-sm">
          <CardBody className="gap-4">
            <p className="text-xl font-semibold">Let&apos;s build together</p>
            <p className="text-sm text-foreground/70">
              Open to contract roles in New Zealand or remote. Reach out with
              your product idea, team needs, or collaboration request.
            </p>
            <div className="text-sm space-y-2">
              <p>
                <span className="font-semibold">Location:</span> Henderson,
                Auckland, NZ
              </p>
              <p>
                <span className="font-semibold">Phone:</span> +64 225 718 844
              </p>
              <p>
                <span className="font-semibold">Email:</span>{' '}
                <Link isExternal href="mailto:ashok.modhave143@gmail.com">
                  ashok.modhave143@gmail.com
                </Link>
              </p>
              <p>
                <span className="font-semibold">LinkedIn:</span>{' '}
                <Link
                  isExternal
                  href="https://www.linkedin.com/in/ashok-modhave"
                >
                  linkedin.com/in/ashok-modhave
                </Link>
              </p>
              <p>
                <span className="font-semibold">GitHub:</span>{' '}
                <Link isExternal href="https://github.com/AshokModhave143">
                  github.com/AshokModhave143
                </Link>
              </p>
            </div>
          </CardBody>
        </Card>
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
              name={field.id}
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
