import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cardData } from "@/constant";

export const SectionOne = () => {
  return (
    <div className="w-full px-4 md:px-8 max-w-7xl mx-auto py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <Card
            key={card.id}
            className="w-full min-h-[170px] flex flex-col justify-between"
          >
            <CardHeader>
              <div className="flex items-center gap-2">
                {card.icon}
                <CardTitle>{card.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription>{card.subtitle}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
