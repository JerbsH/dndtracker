import { Card, CardContent } from '@/components/ui/card';
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field';

export default function Page() {
  return (
    <div className="bg-amber-100 h-screen w-screen overflow-hidden">
      <div className="h-screen">
        <Card className="m-5">
          <div className="flex flex-row flex-1 items-center justify-center font-sans gap-4">
            <section className="w-1/2 text-center">
              <h1>Actions</h1>
            </section>
            <section className="w-1/2 text-center">
              <h1>Spell slots</h1>
              <FieldGroup className="grid grid-cols-3 grid-rows-3">
                <Field>
                  <FieldLabel>Level 1</FieldLabel>
                  <Card>
                    <CardContent>
                      <div className="grid grid-cols-4 gap-2">
                        <div className="bg-blue-400 w-5 h-5 rounded"></div>
                        <div className="bg-blue-400 w-5 h-5 rounded"></div>
                        <div className="bg-blue-400 w-5 h-5 rounded"></div>
                        <div className="bg-blue-400 w-5 h-5 rounded"></div>
                      </div>
                    </CardContent>
                  </Card>
                </Field>
                <Field>
                  <FieldLabel>Level 2</FieldLabel>
                </Field>
                <Field>
                  <FieldLabel>Level 3</FieldLabel>
                </Field>
                <Field>
                  <FieldLabel>Level 4</FieldLabel>
                </Field>
                <Field>
                  <FieldLabel>Level 5</FieldLabel>
                </Field>
                <Field>
                  <FieldLabel>Level 6</FieldLabel>
                </Field>
                <Field>
                  <FieldLabel>Level 7</FieldLabel>
                </Field>
                <Field>
                  <FieldLabel>Level 8</FieldLabel>
                </Field>
                <Field>
                  <FieldLabel>Level 9</FieldLabel>
                </Field>
              </FieldGroup>
            </section>
          </div>
        </Card>
      </div>
    </div>
  );
}
