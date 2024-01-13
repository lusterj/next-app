import { lusitana } from "@/app/ui/fonts";
import { Metadata } from "next";
import Search from "@/app/ui/search";
import CreateCustomer from "@/app/ui/customers/buttons";
import { Suspense } from "react";
import Table from "@/app/ui/customers/table";


export const metadata: Metadata = {
  title: 'Customers'
};

export default function Page({
  searchParams,
}: {
  searchParams?: {
      query?: string;
      page?: string;
  };
}){
  const query = searchParams?.query || '';
    return (
        <Table query={query} />
    )
}