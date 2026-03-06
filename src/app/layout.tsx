import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
};

// Since we have a `[locale]` dynamic segment of the root layout, all 
// pages will be rendered within that segment. This root layout 
// should simply render the children.

export default function RootLayout({ children }: Props) {
    return children;
}
