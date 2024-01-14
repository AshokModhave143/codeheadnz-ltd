export interface InProgressPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: any;
}
export default function InProgressPage(props: InProgressPageProps) {
  return (
    <div>
      <h1>{`${props?.params?.slug[0]} Page`}</h1>
    </div>
  );
}
