import Breadcrumbs from "@/app/ui/invoices/breadcrumbs"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Customers'
};

export default function Page(){
    const breadcrumbItems = [
        { label: 'Home', href: '/' },
        { label: 'Blog', href: '/blog' },
        { label: 'Article', href: '/blog/my-article', active: true },
      ];
      
    return <Breadcrumbs breadcrumbs={breadcrumbItems}/>
}