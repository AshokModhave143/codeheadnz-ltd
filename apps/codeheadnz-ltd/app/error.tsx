'use client';

import { Button, Card, CardBody, CardFooter, CardHeader } from '@heroui/react';
import React from 'react';

const ErrorBoundary = ({
  hasError = false,
  children,
}: {
  hasError?: boolean;
  children: React.ReactNode;
}) => {
  return hasError ? (
    <Card>
      <CardHeader>Something went wrong!</CardHeader>
      <CardBody>
        <p>Ther is an error occured during processing.</p>
      </CardBody>
      <CardFooter>
        <Button variant="solid">Try again</Button>
      </CardFooter>
    </Card>
  ) : (
    children
  );
};

export default ErrorBoundary;
