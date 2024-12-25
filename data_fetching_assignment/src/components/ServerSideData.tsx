import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import serverSideData from "@/api/server-side-api";
interface Data {
  id: number;
  name: string;
  type: string;
  available: boolean;
}
async function ServerSideData() {
  const dataFetching = async () => {
    const data: Data[] = await serverSideData();
    return data;
  };
  const Data = await dataFetching();
  return (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4">
      {Data.map((item) => (
        <Card
          key={item.id}
          className="w-full bg-white p-4 rounded-lg shadow-md transition ease-linear hover:shadow-lg"
        >
          <CardHeader className="mb-4">
            <CardTitle className="text-lg font-semibold text-gray-800">
              {item.name}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600 mb-2">Type: {item.type}</p>
            <CardDescription className="text-sm text-gray-500"></CardDescription>
          </CardContent>
          <CardFooter className="flex justify-between items-center mt-4">
            <p
              className={`text-sm font-medium ${
                item.available ? "text-[#215F65]" : "text-red-600"
              }`}
            >
              {item.available ? "Available" : "Not Available"}
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

export default ServerSideData;
