import { mockClasses } from "@/lib/mock-data";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { notFound } from "next/navigation";

export default function ClassPage({ params }: { params: { classId: string } }) {
  const classData = mockClasses.find(c => c.id === params.classId);

  if (!classData) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline tracking-tight">{classData.name}</h1>
        <p className="text-muted-foreground">{classData.description}</p>
      </div>
      
      <Tabs defaultValue="assignments">
        <TabsList>
          <TabsTrigger value="feed">Feed</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="people">People</TabsTrigger>
        </TabsList>
        <TabsContent value="feed">
          <Card>
            <CardHeader>
              <CardTitle>Class Feed</CardTitle>
              <CardDescription>Recent updates and announcements.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>No new updates.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="assignments">
          <Card>
            <CardHeader>
              <CardTitle>Assignments</CardTitle>
              <CardDescription>All assignments for this class.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>No assignments yet.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="people">
          <Card>
            <CardHeader>
              <CardTitle>People</CardTitle>
              <CardDescription>Everyone in {classData.name}.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>List of students and teachers will be here.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
