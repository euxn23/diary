export async function getOtherWorks() {
  const {
    data: { contents: noteContents },
  } = await fetch(
    "https://note.com/api/v2/creators/euxn/contents?kind=note&page=1"
  ).then((res) => res.json());
  const noteEntries = noteContents.map((content: any) => {
    const date = new Date(content.publishAt);
    return {
      title: content.name,
      url: content.noteUrl,
      media: "note",
      date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`,
    };
  });

  return noteEntries;
}
