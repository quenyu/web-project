import { ArticleDetailsSchema } from './model/types/articleDetailsSchema';
import { Article } from './model/types/article';
import { ArticleDetails } from './ui/ArticleDetails/ArticleDetails';
import { articleDetailsActions, articleDetailsReducer } from './model/slice/articleDetailsSlice';
import { ArticleTextBlockComponent } from './ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import { ArticleImageBlockComponent } from './ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import { ArticleCodeBlockComponent } from './ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import { getArticleDetailsData } from './model/selectors/articleDetails';

export {
	ArticleDetails,
	Article,
	ArticleDetailsSchema,
	articleDetailsActions,
	articleDetailsReducer,
	ArticleTextBlockComponent,
	ArticleImageBlockComponent,
	ArticleCodeBlockComponent,
	getArticleDetailsData,
};
