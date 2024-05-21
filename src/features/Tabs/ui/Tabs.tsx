"use client";
import { tabsData } from "@/shared/lib/data";
import Card from "@/shared/ui/Card/Card";
import Search from "@/shared/ui/icons/search/search";
import { Tabs } from "flowbite-react";

const itemStyle = {
  padding: "8px 16px",
};

export const TabsNav = () => {
  return (
    <Card
      cardStyle="third"
      className="flex py-1 px-1.5 items-center justify-between"
    >
      <Tabs>
        {tabsData.map(({ title, component }, index) => (
          <Tabs.Item
            className="text-sm text-main bg-white leading-6 pt-2"
            title={title}
            key={index}
            style={itemStyle}
          >
            {component}
          </Tabs.Item>
        ))}
      </Tabs>
      <Card className="p-2 cursor-pointer" cardStyle="second">
        <Search />
      </Card>
    </Card>
  );
};
