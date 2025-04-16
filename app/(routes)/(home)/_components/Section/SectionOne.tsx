import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { cardData } from '@/constant';


export const SectionOne = () => {
  return (
    <div className="flex justify-center items-center gap-6 flex-wrap">
      {cardData.map((card) => (
      <Card key={card.id} className="w-72 min-h-[170px] flex flex-col justify-between">
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
  );
};
