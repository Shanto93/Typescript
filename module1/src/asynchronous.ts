{
  //Asynchronous

  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "Data sent successfully";
      if (data) {
        resolve(data);
      } else {
        reject("Error: No data founf");
      }
    });
  };

  const showData = async () => {
    try {
      const data: string = await createPromise();
      console.log(data);
    } catch (error) {
      throw new Error("Error: No data found");
    }
  };

  showData();

  type TTodo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const getTodo = async (): Promise<TTodo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return data;
  };

  getTodo();
}
