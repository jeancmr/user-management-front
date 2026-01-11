import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

interface Props {
  children: React.ReactElement;
  title: string;
  quantity?: string;
}

export const CardChartWrapper = ({ children, title, quantity }: Props) => {
  return (
    <Card className="bg-card border-border lg:col-span-1">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        {quantity && <p className="text-2xl font-semibold text-foreground">{quantity}</p>}
      </CardHeader>
      <CardContent className="pb-4">{children}</CardContent>
    </Card>
  );
};
