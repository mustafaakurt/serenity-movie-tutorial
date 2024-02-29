﻿import { MovieCastEditor } from "@/MovieDB/MovieCast/MovieCastEditor";
import { StringEditor, TextAreaEditor, IntegerEditor, DateEditor, LookupEditor, EnumEditor, PrefixedContext, initFormType } from "@serenity-is/corelib";
import { MovieKind } from "./MovieKind";

export interface MovieForm {
    Title: StringEditor;
    Description: TextAreaEditor;
    CastList: MovieCastEditor;
    Storyline: TextAreaEditor;
    Year: IntegerEditor;
    ReleaseDate: DateEditor;
    GenreList: LookupEditor;
    Runtime: IntegerEditor;
    Kind: EnumEditor;
}

export class MovieForm extends PrefixedContext {
    static readonly formKey = 'MovieDB.Movie';
    private static init: boolean;

    constructor(prefix: string) {
        super(prefix);

        if (!MovieForm.init)  {
            MovieForm.init = true;

            var w0 = StringEditor;
            var w1 = TextAreaEditor;
            var w2 = MovieCastEditor;
            var w3 = IntegerEditor;
            var w4 = DateEditor;
            var w5 = LookupEditor;
            var w6 = EnumEditor;

            initFormType(MovieForm, [
                'Title', w0,
                'Description', w1,
                'CastList', w2,
                'Storyline', w1,
                'Year', w3,
                'ReleaseDate', w4,
                'GenreList', w5,
                'Runtime', w3,
                'Kind', w6
            ]);
        }
    }
}

[MovieKind]; // referenced types