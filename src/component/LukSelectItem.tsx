import { Group,Text } from "@mantine/core";
import { forwardRef, ReactNode } from "react";

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
    image: ReactNode;
    label: string;
    description: string;
  }
  
  export const Luk_SelectItem = forwardRef<HTMLDivElement, ItemProps>(
    ({ image, label, description, ...others }: ItemProps, ref) => (
      <div ref={ref} {...others}>
        <Group noWrap>
          <div className="text-2xl">{image}</div>
  
          <div>
            <Text size="sm">{label}</Text>
            <Text size="xs" color="dimmed">
              {description}
            </Text>
          </div>
        </Group>
      </div>
    )
  );