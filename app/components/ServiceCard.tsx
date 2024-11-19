import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
    CardDescription,
  } from "@/components/ui/card";

  import { FC } from "react";

interface ServiceCardProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>; // Type for icon
  title: string;  // Type for title
  description: string;  // Type for description
}
  
  const ServiceCard: FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
    return (
      <Card className="flex flex-col items-center text-center p-6">
        <CardHeader className="flex flex-col items-center">
          <Icon className="h-12 w-12 mb-4 text-black" />
          <CardTitle className="text-xl font-bold mb-2 text-black">{title}</CardTitle>
          <CardDescription className="text-green-800">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          {/* Add any other content here if necessary */}
        </CardContent>
      </Card>
    );
  };
  
  export default ServiceCard;