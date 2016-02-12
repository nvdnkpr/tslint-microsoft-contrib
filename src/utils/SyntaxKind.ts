import * as ts from 'typescript';
/**
 * This module provides backwards compatibility for TypeScript's ts.SyntaxKind interface.
 * The numbers assigned to the enum elements change with each TypeScript release, so if
 * we want to run these rules against multiple versions of TypeScript then we need to query
 * the TypeScript version at runtime and return the correct numbers for the SyntaxKind
 * elements.
 */
module SyntaxKind {

    export interface SyntaxKind {
        Unknown: number;
        EndOfFileToken: number;
        SingleLineCommentTrivia: number;
        MultiLineCommentTrivia: number;
        NewLineTrivia: number;
        WhitespaceTrivia: number;
        ShebangTrivia?: number; //1.6 only
        ConflictMarkerTrivia: number;
        NumericLiteral: number;
        StringLiteral: number;
        RegularExpressionLiteral: number;
        NoSubstitutionTemplateLiteral: number;
        TemplateHead: number;
        TemplateMiddle: number;
        TemplateTail: number;
        OpenBraceToken: number;
        CloseBraceToken: number;
        OpenParenToken: number;
        CloseParenToken: number;
        OpenBracketToken: number;
        CloseBracketToken: number;
        DotToken: number;
        DotDotDotToken: number;
        SemicolonToken: number;
        CommaToken: number;
        LessThanToken: number;
        LessThanSlashToken?: number; //1.6 only
        GreaterThanToken: number;
        LessThanEqualsToken: number;
        GreaterThanEqualsToken: number;
        EqualsEqualsToken: number;
        ExclamationEqualsToken: number;
        EqualsEqualsEqualsToken: number;
        ExclamationEqualsEqualsToken: number;
        EqualsGreaterThanToken: number;
        PlusToken: number;
        MinusToken: number;
        AsteriskToken: number;
        SlashToken: number;
        PercentToken: number;
        PlusPlusToken: number;
        MinusMinusToken: number;
        LessThanLessThanToken: number;
        GreaterThanGreaterThanToken: number;
        GreaterThanGreaterThanGreaterThanToken: number;
        AmpersandToken: number;
        BarToken: number;
        CaretToken: number;
        ExclamationToken: number;
        TildeToken: number;
        AmpersandAmpersandToken: number;
        BarBarToken: number;
        QuestionToken: number;
        ColonToken: number;
        AtToken: number;
        EqualsToken: number;
        PlusEqualsToken: number;
        MinusEqualsToken: number;
        AsteriskEqualsToken: number;
        SlashEqualsToken: number;
        PercentEqualsToken: number;
        LessThanLessThanEqualsToken: number;
        GreaterThanGreaterThanEqualsToken: number;
        GreaterThanGreaterThanGreaterThanEqualsToken: number;
        AmpersandEqualsToken: number;
        BarEqualsToken: number;
        CaretEqualsToken: number;
        Identifier: number;
        BreakKeyword: number;
        CaseKeyword: number;
        CatchKeyword: number;
        ClassKeyword: number;
        ConstKeyword: number;
        ContinueKeyword: number;
        DebuggerKeyword: number;
        DefaultKeyword: number;
        DeleteKeyword: number;
        DoKeyword: number;
        ElseKeyword: number;
        EnumKeyword: number;
        ExportKeyword: number;
        ExtendsKeyword: number;
        FalseKeyword: number;
        FinallyKeyword: number;
        ForKeyword: number;
        FunctionKeyword: number;
        IfKeyword: number;
        ImportKeyword: number;
        InKeyword: number;
        InstanceOfKeyword: number;
        NewKeyword: number;
        NullKeyword: number;
        ReturnKeyword: number;
        SuperKeyword: number;
        SwitchKeyword: number;
        ThisKeyword: number;
        ThrowKeyword: number;
        TrueKeyword: number;
        TryKeyword: number;
        TypeOfKeyword: number;
        VarKeyword: number;
        VoidKeyword: number;
        WhileKeyword: number;
        WithKeyword: number;
        ImplementsKeyword: number;
        InterfaceKeyword: number;
        LetKeyword: number;
        PackageKeyword: number;
        PrivateKeyword: number;
        ProtectedKeyword: number;
        PublicKeyword: number;
        StaticKeyword: number;
        YieldKeyword: number;
        AbstractKeyword?: number; //1.6 only
        AsKeyword: number;
        AnyKeyword: number;
        AsyncKeyword?: number; //1.6 only
        AwaitKeyword?: number; //1.6 only
        BooleanKeyword: number;
        ConstructorKeyword: number;
        DeclareKeyword: number;
        GetKeyword: number;
        IsKeyword?: number; //1.6 only
        ModuleKeyword: number;
        NamespaceKeyword: number;
        RequireKeyword: number;
        NumberKeyword: number;
        SetKeyword: number;
        StringKeyword: number;
        SymbolKeyword: number;
        TypeKeyword: number;
        FromKeyword: number;
        OfKeyword: number;
        QualifiedName: number;
        ComputedPropertyName: number;
        TypeParameter: number;
        Parameter: number;
        Decorator: number;
        PropertySignature: number;
        PropertyDeclaration: number;
        MethodSignature: number;
        MethodDeclaration: number;
        Constructor: number;
        GetAccessor: number;
        SetAccessor: number;
        CallSignature: number;
        ConstructSignature: number;
        IndexSignature: number;
        TypePredicate?: number; //1.6 only
        TypeReference: number;
        FunctionType: number;
        ConstructorType: number;
        TypeQuery: number;
        TypeLiteral: number;
        ArrayType: number;
        TupleType: number;
        UnionType: number;
        IntersectionType?: number; //1.6 only
        ParenthesizedType: number;
        ObjectBindingPattern: number;
        ArrayBindingPattern: number;
        BindingElement: number;
        ArrayLiteralExpression: number;
        ObjectLiteralExpression: number;
        PropertyAccessExpression: number;
        ElementAccessExpression: number;
        CallExpression: number;
        NewExpression: number;
        TaggedTemplateExpression: number;
        TypeAssertionExpression: number;
        ParenthesizedExpression: number;
        FunctionExpression: number;
        ArrowFunction: number;
        DeleteExpression: number;
        TypeOfExpression: number;
        VoidExpression: number;
        AwaitExpression?: number; //1.6 only
        PrefixUnaryExpression: number;
        PostfixUnaryExpression: number;
        BinaryExpression: number;
        ConditionalExpression: number;
        TemplateExpression: number;
        YieldExpression: number;
        SpreadElementExpression: number;
        ClassExpression: number;
        OmittedExpression: number;
        ExpressionWithTypeArguments: number;
        AsExpression?: number; //1.6 only
        TemplateSpan: number;
        SemicolonClassElement: number;
        Block: number;
        VariableStatement: number;
        EmptyStatement: number;
        ExpressionStatement: number;
        IfStatement: number;
        DoStatement: number;
        WhileStatement: number;
        ForStatement: number;
        ForInStatement: number;
        ForOfStatement: number;
        ContinueStatement: number;
        BreakStatement: number;
        ReturnStatement: number;
        WithStatement: number;
        SwitchStatement: number;
        LabeledStatement: number;
        ThrowStatement: number;
        TryStatement: number;
        DebuggerStatement: number;
        VariableDeclaration: number;
        VariableDeclarationList: number;
        FunctionDeclaration: number;
        ClassDeclaration: number;
        InterfaceDeclaration: number;
        TypeAliasDeclaration: number;
        EnumDeclaration: number;
        ModuleDeclaration: number;
        ModuleBlock: number;
        CaseBlock: number;
        ImportEqualsDeclaration: number;
        ImportDeclaration: number;
        ImportClause: number;
        NamespaceImport: number;
        NamedImports: number;
        ImportSpecifier: number;
        ExportAssignment: number;
        ExportDeclaration: number;
        NamedExports: number;
        ExportSpecifier: number;
        MissingDeclaration: number;
        ExternalModuleReference: number;
        JsxElement?: number; //1.6 only
        JsxSelfClosingElement?: number; //1.6 only
        JsxOpeningElement?: number; //1.6 only
        JsxText?: number; //1.6 only
        JsxClosingElement?: number; //1.6 only
        JsxAttribute?: number; //1.6 only
        JsxSpreadAttribute?: number; //1.6 only
        JsxExpression?: number; //1.6 only
        CaseClause: number;
        DefaultClause: number;
        HeritageClause: number;
        CatchClause: number;
        PropertyAssignment: number;
        ShorthandPropertyAssignment: number;
        EnumMember: number;
        SourceFile: number;
        JSDocTypeExpression?: number; //1.6 only
        JSDocAllType?: number; //1.6 only
        JSDocUnknownType?: number; //1.6 only
        JSDocArrayType?: number; //1.6 only
        JSDocUnionType?: number; //1.6 only
        JSDocTupleType?: number; //1.6 only
        JSDocNullableType?: number; //1.6 only
        JSDocNonNullableType?: number; //1.6 only
        JSDocRecordType?: number; //1.6 only
        JSDocRecordMember?: number; //1.6 only
        JSDocTypeReference?: number; //1.6 only
        JSDocOptionalType?: number; //1.6 only
        JSDocFunctionType?: number; //1.6 only
        JSDocVariadicType?: number; //1.6 only
        JSDocConstructorType?: number; //1.6 only
        JSDocThisType?: number; //1.6 only
        JSDocComment?: number; //1.6 only
        JSDocTag?: number; //1.6 only
        JSDocParameterTag?: number; //1.6 only
        JSDocReturnTag?: number; //1.6 only
        JSDocTypeTag?: number; //1.6 only
        JSDocTemplateTag?: number; //1.6 only
        SyntaxList: number;
        Count: number;
        FirstAssignment: number;
        LastAssignment: number;
        FirstReservedWord: number;
        LastReservedWord: number;
        FirstKeyword: number;
        LastKeyword: number;
        FirstFutureReservedWord: number;
        LastFutureReservedWord: number;
        FirstTypeNode: number;
        LastTypeNode: number;
        FirstPunctuation: number;
        LastPunctuation: number;
        FirstToken: number;
        LastToken: number;
        FirstTriviaToken: number;
        LastTriviaToken: number;
        FirstLiteralToken: number;
        LastLiteralToken: number;
        FirstTemplateToken: number;
        LastTemplateToken: number;
        FirstBinaryOperator: number;
        LastBinaryOperator: number;
        FirstNode: number;
        AsteriskAsteriskToken?: number; // 1.7 only
        AsteriskAsteriskEqualsToken?: number; // 1.7 only
    }

    var cachedKinds: SyntaxKind.SyntaxKind;

    /* tslint:disable:variable-name */
    var SyntaxKind_1_5: SyntaxKind = {
        /* tslint:enable:variable-name */
        Unknown: 0,
        EndOfFileToken: 1,
        SingleLineCommentTrivia: 2,
        MultiLineCommentTrivia: 3,
        NewLineTrivia: 4,
        WhitespaceTrivia: 5,
        ConflictMarkerTrivia: 6,
        NumericLiteral: 7,
        StringLiteral: 8,
        RegularExpressionLiteral: 9,
        NoSubstitutionTemplateLiteral: 10,
        TemplateHead: 11,
        TemplateMiddle: 12,
        TemplateTail: 13,
        OpenBraceToken: 14,
        CloseBraceToken: 15,
        OpenParenToken: 16,
        CloseParenToken: 17,
        OpenBracketToken: 18,
        CloseBracketToken: 19,
        DotToken: 20,
        DotDotDotToken: 21,
        SemicolonToken: 22,
        CommaToken: 23,
        LessThanToken: 24,
        GreaterThanToken: 25,
        LessThanEqualsToken: 26,
        GreaterThanEqualsToken: 27,
        EqualsEqualsToken: 28,
        ExclamationEqualsToken: 29,
        EqualsEqualsEqualsToken: 30,
        ExclamationEqualsEqualsToken: 31,
        EqualsGreaterThanToken: 32,
        PlusToken: 33,
        MinusToken: 34,
        AsteriskToken: 35,
        SlashToken: 36,
        PercentToken: 37,
        PlusPlusToken: 38,
        MinusMinusToken: 39,
        LessThanLessThanToken: 40,
        GreaterThanGreaterThanToken: 41,
        GreaterThanGreaterThanGreaterThanToken: 42,
        AmpersandToken: 43,
        BarToken: 44,
        CaretToken: 45,
        ExclamationToken: 46,
        TildeToken: 47,
        AmpersandAmpersandToken: 48,
        BarBarToken: 49,
        QuestionToken: 50,
        ColonToken: 51,
        AtToken: 52,
        EqualsToken: 53,
        PlusEqualsToken: 54,
        MinusEqualsToken: 55,
        AsteriskEqualsToken: 56,
        SlashEqualsToken: 57,
        PercentEqualsToken: 58,
        LessThanLessThanEqualsToken: 59,
        GreaterThanGreaterThanEqualsToken: 60,
        GreaterThanGreaterThanGreaterThanEqualsToken: 61,
        AmpersandEqualsToken: 62,
        BarEqualsToken: 63,
        CaretEqualsToken: 64,
        Identifier: 65,
        BreakKeyword: 66,
        CaseKeyword: 67,
        CatchKeyword: 68,
        ClassKeyword: 69,
        ConstKeyword: 70,
        ContinueKeyword: 71,
        DebuggerKeyword: 72,
        DefaultKeyword: 73,
        DeleteKeyword: 74,
        DoKeyword: 75,
        ElseKeyword: 76,
        EnumKeyword: 77,
        ExportKeyword: 78,
        ExtendsKeyword: 79,
        FalseKeyword: 80,
        FinallyKeyword: 81,
        ForKeyword: 82,
        FunctionKeyword: 83,
        IfKeyword: 84,
        ImportKeyword: 85,
        InKeyword: 86,
        InstanceOfKeyword: 87,
        NewKeyword: 88,
        NullKeyword: 89,
        ReturnKeyword: 90,
        SuperKeyword: 91,
        SwitchKeyword: 92,
        ThisKeyword: 93,
        ThrowKeyword: 94,
        TrueKeyword: 95,
        TryKeyword: 96,
        TypeOfKeyword: 97,
        VarKeyword: 98,
        VoidKeyword: 99,
        WhileKeyword: 100,
        WithKeyword: 101,
        ImplementsKeyword: 102,
        InterfaceKeyword: 103,
        LetKeyword: 104,
        PackageKeyword: 105,
        PrivateKeyword: 106,
        ProtectedKeyword: 107,
        PublicKeyword: 108,
        StaticKeyword: 109,
        YieldKeyword: 110,
        AsKeyword: 111,
        AnyKeyword: 112,
        BooleanKeyword: 113,
        ConstructorKeyword: 114,
        DeclareKeyword: 115,
        GetKeyword: 116,
        ModuleKeyword: 117,
        NamespaceKeyword: 118,
        RequireKeyword: 119,
        NumberKeyword: 120,
        SetKeyword: 121,
        StringKeyword: 122,
        SymbolKeyword: 123,
        TypeKeyword: 124,
        FromKeyword: 125,
        OfKeyword: 126,
        QualifiedName: 127,
        ComputedPropertyName: 128,
        TypeParameter: 129,
        Parameter: 130,
        Decorator: 131,
        PropertySignature: 132,
        PropertyDeclaration: 133,
        MethodSignature: 134,
        MethodDeclaration: 135,
        Constructor: 136,
        GetAccessor: 137,
        SetAccessor: 138,
        CallSignature: 139,
        ConstructSignature: 140,
        IndexSignature: 141,
        TypeReference: 142,
        FunctionType: 143,
        ConstructorType: 144,
        TypeQuery: 145,
        TypeLiteral: 146,
        ArrayType: 147,
        TupleType: 148,
        UnionType: 149,
        ParenthesizedType: 150,
        ObjectBindingPattern: 151,
        ArrayBindingPattern: 152,
        BindingElement: 153,
        ArrayLiteralExpression: 154,
        ObjectLiteralExpression: 155,
        PropertyAccessExpression: 156,
        ElementAccessExpression: 157,
        CallExpression: 158,
        NewExpression: 159,
        TaggedTemplateExpression: 160,
        TypeAssertionExpression: 161,
        ParenthesizedExpression: 162,
        FunctionExpression: 163,
        ArrowFunction: 164,
        DeleteExpression: 165,
        TypeOfExpression: 166,
        VoidExpression: 167,
        PrefixUnaryExpression: 168,
        PostfixUnaryExpression: 169,
        BinaryExpression: 170,
        ConditionalExpression: 171,
        TemplateExpression: 172,
        YieldExpression: 173,
        SpreadElementExpression: 174,
        ClassExpression: 175,
        OmittedExpression: 176,
        ExpressionWithTypeArguments: 177,
        TemplateSpan: 178,
        SemicolonClassElement: 179,
        Block: 180,
        VariableStatement: 181,
        EmptyStatement: 182,
        ExpressionStatement: 183,
        IfStatement: 184,
        DoStatement: 185,
        WhileStatement: 186,
        ForStatement: 187,
        ForInStatement: 188,
        ForOfStatement: 189,
        ContinueStatement: 190,
        BreakStatement: 191,
        ReturnStatement: 192,
        WithStatement: 193,
        SwitchStatement: 194,
        LabeledStatement: 195,
        ThrowStatement: 196,
        TryStatement: 197,
        DebuggerStatement: 198,
        VariableDeclaration: 199,
        VariableDeclarationList: 200,
        FunctionDeclaration: 201,
        ClassDeclaration: 202,
        InterfaceDeclaration: 203,
        TypeAliasDeclaration: 204,
        EnumDeclaration: 205,
        ModuleDeclaration: 206,
        ModuleBlock: 207,
        CaseBlock: 208,
        ImportEqualsDeclaration: 209,
        ImportDeclaration: 210,
        ImportClause: 211,
        NamespaceImport: 212,
        NamedImports: 213,
        ImportSpecifier: 214,
        ExportAssignment: 215,
        ExportDeclaration: 216,
        NamedExports: 217,
        ExportSpecifier: 218,
        MissingDeclaration: 219,
        ExternalModuleReference: 220,
        CaseClause: 221,
        DefaultClause: 222,
        HeritageClause: 223,
        CatchClause: 224,
        PropertyAssignment: 225,
        ShorthandPropertyAssignment: 226,
        EnumMember: 227,
        SourceFile: 228,
        SyntaxList: 229,
        Count: 230,
        FirstAssignment: 53,
        LastAssignment: 64,
        FirstReservedWord: 66,
        LastReservedWord: 101,
        FirstKeyword: 66,
        LastKeyword: 126,
        FirstFutureReservedWord: 102,
        LastFutureReservedWord: 110,
        FirstTypeNode: 142,
        LastTypeNode: 150,
        FirstPunctuation: 14,
        LastPunctuation: 64,
        FirstToken: 0,
        LastToken: 126,
        FirstTriviaToken: 2,
        LastTriviaToken: 6,
        FirstLiteralToken: 7,
        LastLiteralToken: 10,
        FirstTemplateToken: 10,
        LastTemplateToken: 13,
        FirstBinaryOperator: 24,
        LastBinaryOperator: 64,
        FirstNode: 127
    };

    /* tslint:disable:variable-name */
    var SyntaxKind_1_6: SyntaxKind = {
        /* tslint:enable:variable-name */
        Unknown: 0,
        EndOfFileToken: 1,
        SingleLineCommentTrivia: 2,
        MultiLineCommentTrivia: 3,
        NewLineTrivia: 4,
        WhitespaceTrivia: 5,
        ShebangTrivia: 6,
        ConflictMarkerTrivia: 7,
        NumericLiteral: 8,
        StringLiteral: 9,
        RegularExpressionLiteral: 10,
        NoSubstitutionTemplateLiteral: 11,
        TemplateHead: 12,
        TemplateMiddle: 13,
        TemplateTail: 14,
        OpenBraceToken: 15,
        CloseBraceToken: 16,
        OpenParenToken: 17,
        CloseParenToken: 18,
        OpenBracketToken: 19,
        CloseBracketToken: 20,
        DotToken: 21,
        DotDotDotToken: 22,
        SemicolonToken: 23,
        CommaToken: 24,
        LessThanToken: 25,
        LessThanSlashToken: 26,
        GreaterThanToken: 27,
        LessThanEqualsToken: 28,
        GreaterThanEqualsToken: 29,
        EqualsEqualsToken: 30,
        ExclamationEqualsToken: 31,
        EqualsEqualsEqualsToken: 32,
        ExclamationEqualsEqualsToken: 33,
        EqualsGreaterThanToken: 34,
        PlusToken: 35,
        MinusToken: 36,
        AsteriskToken: 37,
        SlashToken: 38,
        PercentToken: 39,
        PlusPlusToken: 40,
        MinusMinusToken: 41,
        LessThanLessThanToken: 42,
        GreaterThanGreaterThanToken: 43,
        GreaterThanGreaterThanGreaterThanToken: 44,
        AmpersandToken: 45,
        BarToken: 46,
        CaretToken: 47,
        ExclamationToken: 48,
        TildeToken: 49,
        AmpersandAmpersandToken: 50,
        BarBarToken: 51,
        QuestionToken: 52,
        ColonToken: 53,
        AtToken: 54,
        EqualsToken: 55,
        PlusEqualsToken: 56,
        MinusEqualsToken: 57,
        AsteriskEqualsToken: 58,
        SlashEqualsToken: 59,
        PercentEqualsToken: 60,
        LessThanLessThanEqualsToken: 61,
        GreaterThanGreaterThanEqualsToken: 62,
        GreaterThanGreaterThanGreaterThanEqualsToken: 63,
        AmpersandEqualsToken: 64,
        BarEqualsToken: 65,
        CaretEqualsToken: 66,
        Identifier: 67,
        BreakKeyword: 68,
        CaseKeyword: 69,
        CatchKeyword: 70,
        ClassKeyword: 71,
        ConstKeyword: 72,
        ContinueKeyword: 73,
        DebuggerKeyword: 74,
        DefaultKeyword: 75,
        DeleteKeyword: 76,
        DoKeyword: 77,
        ElseKeyword: 78,
        EnumKeyword: 79,
        ExportKeyword: 80,
        ExtendsKeyword: 81,
        FalseKeyword: 82,
        FinallyKeyword: 83,
        ForKeyword: 84,
        FunctionKeyword: 85,
        IfKeyword: 86,
        ImportKeyword: 87,
        InKeyword: 88,
        InstanceOfKeyword: 89,
        NewKeyword: 90,
        NullKeyword: 91,
        ReturnKeyword: 92,
        SuperKeyword: 93,
        SwitchKeyword: 94,
        ThisKeyword: 95,
        ThrowKeyword: 96,
        TrueKeyword: 97,
        TryKeyword: 98,
        TypeOfKeyword: 99,
        VarKeyword: 100,
        VoidKeyword: 101,
        WhileKeyword: 102,
        WithKeyword: 103,
        ImplementsKeyword: 104,
        InterfaceKeyword: 105,
        LetKeyword: 106,
        PackageKeyword: 107,
        PrivateKeyword: 108,
        ProtectedKeyword: 109,
        PublicKeyword: 110,
        StaticKeyword: 111,
        YieldKeyword: 112,
        AbstractKeyword: 113,
        AsKeyword: 114,
        AnyKeyword: 115,
        AsyncKeyword: 116,
        AwaitKeyword: 117,
        BooleanKeyword: 118,
        ConstructorKeyword: 119,
        DeclareKeyword: 120,
        GetKeyword: 121,
        IsKeyword: 122,
        ModuleKeyword: 123,
        NamespaceKeyword: 124,
        RequireKeyword: 125,
        NumberKeyword: 126,
        SetKeyword: 127,
        StringKeyword: 128,
        SymbolKeyword: 129,
        TypeKeyword: 130,
        FromKeyword: 131,
        OfKeyword: 132,
        QualifiedName: 133,
        ComputedPropertyName: 134,
        TypeParameter: 135,
        Parameter: 136,
        Decorator: 137,
        PropertySignature: 138,
        PropertyDeclaration: 139,
        MethodSignature: 140,
        MethodDeclaration: 141,
        Constructor: 142,
        GetAccessor: 143,
        SetAccessor: 144,
        CallSignature: 145,
        ConstructSignature: 146,
        IndexSignature: 147,
        TypePredicate: 148,
        TypeReference: 149,
        FunctionType: 150,
        ConstructorType: 151,
        TypeQuery: 152,
        TypeLiteral: 153,
        ArrayType: 154,
        TupleType: 155,
        UnionType: 156,
        IntersectionType: 157,
        ParenthesizedType: 158,
        ObjectBindingPattern: 159,
        ArrayBindingPattern: 160,
        BindingElement: 161,
        ArrayLiteralExpression: 162,
        ObjectLiteralExpression: 163,
        PropertyAccessExpression: 164,
        ElementAccessExpression: 165,
        CallExpression: 166,
        NewExpression: 167,
        TaggedTemplateExpression: 168,
        TypeAssertionExpression: 169,
        ParenthesizedExpression: 170,
        FunctionExpression: 171,
        ArrowFunction: 172,
        DeleteExpression: 173,
        TypeOfExpression: 174,
        VoidExpression: 175,
        AwaitExpression: 176,
        PrefixUnaryExpression: 177,
        PostfixUnaryExpression: 178,
        BinaryExpression: 179,
        ConditionalExpression: 180,
        TemplateExpression: 181,
        YieldExpression: 182,
        SpreadElementExpression: 183,
        ClassExpression: 184,
        OmittedExpression: 185,
        ExpressionWithTypeArguments: 186,
        AsExpression: 187,
        TemplateSpan: 188,
        SemicolonClassElement: 189,
        Block: 190,
        VariableStatement: 191,
        EmptyStatement: 192,
        ExpressionStatement: 193,
        IfStatement: 194,
        DoStatement: 195,
        WhileStatement: 196,
        ForStatement: 197,
        ForInStatement: 198,
        ForOfStatement: 199,
        ContinueStatement: 200,
        BreakStatement: 201,
        ReturnStatement: 202,
        WithStatement: 203,
        SwitchStatement: 204,
        LabeledStatement: 205,
        ThrowStatement: 206,
        TryStatement: 207,
        DebuggerStatement: 208,
        VariableDeclaration: 209,
        VariableDeclarationList: 210,
        FunctionDeclaration: 211,
        ClassDeclaration: 212,
        InterfaceDeclaration: 213,
        TypeAliasDeclaration: 214,
        EnumDeclaration: 215,
        ModuleDeclaration: 216,
        ModuleBlock: 217,
        CaseBlock: 218,
        ImportEqualsDeclaration: 219,
        ImportDeclaration: 220,
        ImportClause: 221,
        NamespaceImport: 222,
        NamedImports: 223,
        ImportSpecifier: 224,
        ExportAssignment: 225,
        ExportDeclaration: 226,
        NamedExports: 227,
        ExportSpecifier: 228,
        MissingDeclaration: 229,
        ExternalModuleReference: 230,
        JsxElement: 231,
        JsxSelfClosingElement: 232,
        JsxOpeningElement: 233,
        JsxText: 234,
        JsxClosingElement: 235,
        JsxAttribute: 236,
        JsxSpreadAttribute: 237,
        JsxExpression: 238,
        CaseClause: 239,
        DefaultClause: 240,
        HeritageClause: 241,
        CatchClause: 242,
        PropertyAssignment: 243,
        ShorthandPropertyAssignment: 244,
        EnumMember: 245,
        SourceFile: 246,
        JSDocTypeExpression: 247,
        JSDocAllType: 248,
        JSDocUnknownType: 249,
        JSDocArrayType: 250,
        JSDocUnionType: 251,
        JSDocTupleType: 252,
        JSDocNullableType: 253,
        JSDocNonNullableType: 254,
        JSDocRecordType: 255,
        JSDocRecordMember: 256,
        JSDocTypeReference: 257,
        JSDocOptionalType: 258,
        JSDocFunctionType: 259,
        JSDocVariadicType: 260,
        JSDocConstructorType: 261,
        JSDocThisType: 262,
        JSDocComment: 263,
        JSDocTag: 264,
        JSDocParameterTag: 265,
        JSDocReturnTag: 266,
        JSDocTypeTag: 267,
        JSDocTemplateTag: 268,
        SyntaxList: 269,
        Count: 270,
        FirstAssignment: 55,
        LastAssignment: 66,
        FirstReservedWord: 68,
        LastReservedWord: 103,
        FirstKeyword: 68,
        LastKeyword: 132,
        FirstFutureReservedWord: 104,
        LastFutureReservedWord: 112,
        FirstTypeNode: 149,
        LastTypeNode: 158,
        FirstPunctuation: 15,
        LastPunctuation: 66,
        FirstToken: 0,
        LastToken: 132,
        FirstTriviaToken: 2,
        LastTriviaToken: 7,
        FirstLiteralToken: 8,
        LastLiteralToken: 11,
        FirstTemplateToken: 11,
        LastTemplateToken: 14,
        FirstBinaryOperator: 25,
        LastBinaryOperator: 66,
        FirstNode: 133
    };

    /* tslint:disable:variable-name */
    var SyntaxKind_1_7: SyntaxKind = {
        /* tslint:enable:variable-name */
        Unknown: 0,
        EndOfFileToken: 1,
        SingleLineCommentTrivia: 2,
        MultiLineCommentTrivia: 3,
        NewLineTrivia: 4,
        WhitespaceTrivia: 5,
        ShebangTrivia: 6,
        ConflictMarkerTrivia: 7,
        NumericLiteral: 8,
        StringLiteral: 9,
        RegularExpressionLiteral: 10,
        NoSubstitutionTemplateLiteral: 11,
        TemplateHead: 12,
        TemplateMiddle: 13,
        TemplateTail: 14,
        OpenBraceToken: 15,
        CloseBraceToken: 16,
        OpenParenToken: 17,
        CloseParenToken: 18,
        OpenBracketToken: 19,
        CloseBracketToken: 20,
        DotToken: 21,
        DotDotDotToken: 22,
        SemicolonToken: 23,
        CommaToken: 24,
        LessThanToken: 25,
        LessThanSlashToken: 26,
        GreaterThanToken: 27,
        LessThanEqualsToken: 28,
        GreaterThanEqualsToken: 29,
        EqualsEqualsToken: 30,
        ExclamationEqualsToken: 31,
        EqualsEqualsEqualsToken: 32,
        ExclamationEqualsEqualsToken: 33,
        EqualsGreaterThanToken: 34,
        PlusToken: 35,
        MinusToken: 36,
        AsteriskToken: 37,
        AsteriskAsteriskToken: 38,
        SlashToken: 39,
        PercentToken: 40,
        PlusPlusToken: 41,
        MinusMinusToken: 42,
        LessThanLessThanToken: 43,
        GreaterThanGreaterThanToken: 44,
        GreaterThanGreaterThanGreaterThanToken: 45,
        AmpersandToken: 46,
        BarToken: 47,
        CaretToken: 48,
        ExclamationToken: 49,
        TildeToken: 50,
        AmpersandAmpersandToken: 51,
        BarBarToken: 52,
        QuestionToken: 53,
        ColonToken: 54,
        AtToken: 55,
        EqualsToken: 56,
        PlusEqualsToken: 57,
        MinusEqualsToken: 58,
        AsteriskEqualsToken: 59,
        AsteriskAsteriskEqualsToken: 60,
        SlashEqualsToken: 61,
        PercentEqualsToken: 62,
        LessThanLessThanEqualsToken: 63,
        GreaterThanGreaterThanEqualsToken: 64,
        GreaterThanGreaterThanGreaterThanEqualsToken: 65,
        AmpersandEqualsToken: 66,
        BarEqualsToken: 67,
        CaretEqualsToken: 68,
        Identifier: 69,
        BreakKeyword: 70,
        CaseKeyword: 71,
        CatchKeyword: 72,
        ClassKeyword: 73,
        ConstKeyword: 74,
        ContinueKeyword: 75,
        DebuggerKeyword: 76,
        DefaultKeyword: 77,
        DeleteKeyword: 78,
        DoKeyword: 79,
        ElseKeyword: 80,
        EnumKeyword: 81,
        ExportKeyword: 82,
        ExtendsKeyword: 83,
        FalseKeyword: 84,
        FinallyKeyword: 85,
        ForKeyword: 86,
        FunctionKeyword: 87,
        IfKeyword: 88,
        ImportKeyword: 89,
        InKeyword: 90,
        InstanceOfKeyword: 91,
        NewKeyword: 92,
        NullKeyword: 93,
        ReturnKeyword: 94,
        SuperKeyword: 95,
        SwitchKeyword: 96,
        ThisKeyword: 97,
        ThrowKeyword: 98,
        TrueKeyword: 99,
        TryKeyword: 100,
        TypeOfKeyword: 101,
        VarKeyword: 102,
        VoidKeyword: 103,
        WhileKeyword: 104,
        WithKeyword: 105,
        ImplementsKeyword: 106,
        InterfaceKeyword: 107,
        LetKeyword: 108,
        PackageKeyword: 109,
        PrivateKeyword: 110,
        ProtectedKeyword: 111,
        PublicKeyword: 112,
        StaticKeyword: 113,
        YieldKeyword: 114,
        AbstractKeyword: 115,
        AsKeyword: 116,
        AnyKeyword: 117,
        AsyncKeyword: 118,
        AwaitKeyword: 119,
        BooleanKeyword: 120,
        ConstructorKeyword: 121,
        DeclareKeyword: 122,
        GetKeyword: 123,
        IsKeyword: 124,
        ModuleKeyword: 125,
        NamespaceKeyword: 126,
        RequireKeyword: 127,
        NumberKeyword: 128,
        SetKeyword: 129,
        StringKeyword: 130,
        SymbolKeyword: 131,
        TypeKeyword: 132,
        FromKeyword: 133,
        OfKeyword: 134,
        QualifiedName: 135,
        ComputedPropertyName: 136,
        TypeParameter: 137,
        Parameter: 138,
        Decorator: 139,
        PropertySignature: 140,
        PropertyDeclaration: 141,
        MethodSignature: 142,
        MethodDeclaration: 143,
        Constructor: 144,
        GetAccessor: 145,
        SetAccessor: 146,
        CallSignature: 147,
        ConstructSignature: 148,
        IndexSignature: 149,
        TypePredicate: 150,
        TypeReference: 151,
        FunctionType: 152,
        ConstructorType: 153,
        TypeQuery: 154,
        TypeLiteral: 155,
        ArrayType: 156,
        TupleType: 157,
        UnionType: 158,
        IntersectionType: 159,
        ParenthesizedType: 160,
        ObjectBindingPattern: 161,
        ArrayBindingPattern: 162,
        BindingElement: 163,
        ArrayLiteralExpression: 164,
        ObjectLiteralExpression: 165,
        PropertyAccessExpression: 166,
        ElementAccessExpression: 167,
        CallExpression: 168,
        NewExpression: 169,
        TaggedTemplateExpression: 170,
        TypeAssertionExpression: 171,
        ParenthesizedExpression: 172,
        FunctionExpression: 173,
        ArrowFunction: 174,
        DeleteExpression: 175,
        TypeOfExpression: 176,
        VoidExpression: 177,
        AwaitExpression: 178,
        PrefixUnaryExpression: 179,
        PostfixUnaryExpression: 180,
        BinaryExpression: 181,
        ConditionalExpression: 182,
        TemplateExpression: 183,
        YieldExpression: 184,
        SpreadElementExpression: 185,
        ClassExpression: 186,
        OmittedExpression: 187,
        ExpressionWithTypeArguments: 188,
        AsExpression: 189,
        TemplateSpan: 190,
        SemicolonClassElement: 191,
        Block: 192,
        VariableStatement: 193,
        EmptyStatement: 194,
        ExpressionStatement: 195,
        IfStatement: 196,
        DoStatement: 197,
        WhileStatement: 198,
        ForStatement: 199,
        ForInStatement: 200,
        ForOfStatement: 201,
        ContinueStatement: 202,
        BreakStatement: 203,
        ReturnStatement: 204,
        WithStatement: 205,
        SwitchStatement: 206,
        LabeledStatement: 207,
        ThrowStatement: 208,
        TryStatement: 209,
        DebuggerStatement: 210,
        VariableDeclaration: 211,
        VariableDeclarationList: 212,
        FunctionDeclaration: 213,
        ClassDeclaration: 214,
        InterfaceDeclaration: 215,
        TypeAliasDeclaration: 216,
        EnumDeclaration: 217,
        ModuleDeclaration: 218,
        ModuleBlock: 219,
        CaseBlock: 220,
        ImportEqualsDeclaration: 221,
        ImportDeclaration: 222,
        ImportClause: 223,
        NamespaceImport: 224,
        NamedImports: 225,
        ImportSpecifier: 226,
        ExportAssignment: 227,
        ExportDeclaration: 228,
        NamedExports: 229,
        ExportSpecifier: 230,
        MissingDeclaration: 231,
        ExternalModuleReference: 232,
        JsxElement: 233,
        JsxSelfClosingElement: 234,
        JsxOpeningElement: 235,
        JsxText: 236,
        JsxClosingElement: 237,
        JsxAttribute: 238,
        JsxSpreadAttribute: 239,
        JsxExpression: 240,
        CaseClause: 241,
        DefaultClause: 242,
        HeritageClause: 243,
        CatchClause: 244,
        PropertyAssignment: 245,
        ShorthandPropertyAssignment: 246,
        EnumMember: 247,
        SourceFile: 248,
        JSDocTypeExpression: 249,
        JSDocAllType: 250,
        JSDocUnknownType: 251,
        JSDocArrayType: 252,
        JSDocUnionType: 253,
        JSDocTupleType: 254,
        JSDocNullableType: 255,
        JSDocNonNullableType: 256,
        JSDocRecordType: 257,
        JSDocRecordMember: 258,
        JSDocTypeReference: 259,
        JSDocOptionalType: 260,
        JSDocFunctionType: 261,
        JSDocVariadicType: 262,
        JSDocConstructorType: 263,
        JSDocThisType: 264,
        JSDocComment: 265,
        JSDocTag: 266,
        JSDocParameterTag: 267,
        JSDocReturnTag: 268,
        JSDocTypeTag: 269,
        JSDocTemplateTag: 270,
        SyntaxList: 271,
        Count: 272,
        FirstAssignment: 56,
        LastAssignment: 68,
        FirstReservedWord: 70,
        LastReservedWord: 105,
        FirstKeyword: 70,
        LastKeyword: 134,
        FirstFutureReservedWord: 106,
        LastFutureReservedWord: 114,
        FirstTypeNode: 151,
        LastTypeNode: 160,
        FirstPunctuation: 15,
        LastPunctuation: 68,
        FirstToken: 0,
        LastToken: 134,
        FirstTriviaToken: 2,
        LastTriviaToken: 7,
        FirstLiteralToken: 8,
        LastLiteralToken: 11,
        FirstTemplateToken: 11,
        LastTemplateToken: 14,
        FirstBinaryOperator: 25,
        LastBinaryOperator: 68,
        FirstNode: 135,
    };

    export function current(): SyntaxKind.SyntaxKind {
        if (cachedKinds == null) {
            if (ts.version){
                if (/1\.5\..*/.test(ts.version)) {
                    cachedKinds = SyntaxKind_1_5;
                } else if (/1\.6\..*/.test(ts.version)) {
                    cachedKinds = SyntaxKind_1_6;
                } else if (/1\.7\..*/.test(ts.version)) {
                    cachedKinds = SyntaxKind_1_7;
                }
            } else {
                if (ts.SyntaxKind !== undefined){
                    cachedKinds = SyntaxKind;
                } else {
                    throw new Error('Unsupported TypeScript version: ' + ts.version);    
                }
                
            }
        }
        return cachedKinds;
    }
}

export = SyntaxKind;

