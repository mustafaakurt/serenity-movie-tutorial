using Serenity.ComponentModel;
using System;

namespace MovieTutorial.MovieDB.Forms;

[FormScript("MovieDB.Movie")]
[BasedOnRow(typeof(MovieRow), CheckNames = true)]
public class MovieForm
{
    public string Title { get; set; }
    [TextAreaEditor(Rows = 3)]
    public string Description { get; set; }
    [TextAreaEditor(Rows = 3)]
    public string Storyline { get; set; }
    public int Year { get; set; }
    public DateTime ReleaseDate { get; set; }
    [DisplayName("Runtime in Minutes"), Width(150), AlignRight]
    public int Runtime { get; set; }
}